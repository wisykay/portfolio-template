#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path


DEFAULT_CONFIG = {
    "male-front": {"x": 0.06, "y": 0.08, "w": 0.36, "h": 0.39},
    "male-back": {"x": 0.56, "y": 0.08, "w": 0.36, "h": 0.39},
    "female-front": {"x": 0.08, "y": 0.56, "w": 0.33, "h": 0.38},
    "female-back": {"x": 0.58, "y": 0.56, "w": 0.33, "h": 0.38},
}


def run(command: list[str]) -> str:
    result = subprocess.run(command, capture_output=True, text=True)
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or "Command failed")
    return result.stdout.strip()


def get_dimensions(image_path: Path) -> tuple[int, int]:
    output = run(["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(image_path)])
    width = None
    height = None

    for line in output.splitlines():
        if "pixelWidth:" in line:
            width = int(line.split(":")[-1].strip())
        if "pixelHeight:" in line:
            height = int(line.split(":")[-1].strip())

    if width is None or height is None:
        raise RuntimeError(f"Could not read image dimensions for {image_path}")

    return width, height


def crop(image_path: Path, output_path: Path, width: int, height: int, spec: dict[str, float]) -> None:
    crop_width = max(1, round(width * spec["w"]))
    crop_height = max(1, round(height * spec["h"]))
    offset_x = max(0, round(width * spec["x"]))
    offset_y = max(0, round(height * spec["y"]))

    run(
        [
            "sips",
            "-c",
            str(crop_height),
            str(crop_width),
            "--cropOffset",
            str(offset_y),
            str(offset_x),
            str(image_path),
            "--out",
            str(output_path),
        ]
    )


def load_config(config_path: Path | None) -> dict[str, dict[str, float]]:
    if config_path is None:
        return DEFAULT_CONFIG

    with config_path.open() as fh:
        return json.load(fh)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Split a 2x2 character sheet into individual front/back references."
    )
    parser.add_argument(
        "--source",
        default="public/assets/characters/references/source/character-sheet.png",
        help="Path to the combined character sheet image.",
    )
    parser.add_argument(
        "--output-dir",
        default="public/assets/characters/references/crops",
        help="Folder where individual crops should be written.",
    )
    parser.add_argument(
        "--config",
        help="Optional JSON file with crop percentages keyed by output name.",
    )
    args = parser.parse_args()

    project_root = Path(__file__).resolve().parents[1]
    source_path = project_root / args.source
    output_dir = project_root / args.output_dir
    config_path = project_root / args.config if args.config else None

    if not source_path.exists():
        print(f"Source image not found: {source_path}", file=sys.stderr)
        return 1

    output_dir.mkdir(parents=True, exist_ok=True)

    config = load_config(config_path)
    width, height = get_dimensions(source_path)

    for name, spec in config.items():
        output_path = output_dir / f"{name}.png"
        crop(source_path, output_path, width, height, spec)
        print(f"Wrote {output_path.relative_to(project_root)}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
