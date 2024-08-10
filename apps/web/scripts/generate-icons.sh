#!/usr/bin/env bash

set -eu

pnpm svgr \
  --typescript \
  --memo \
  --filename-case kebab \
  --out-dir src/icons src/icons/svg