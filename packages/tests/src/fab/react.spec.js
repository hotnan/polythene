import { runSnapshots } from "../../scripts/react-snapshots";
import { renderer, fab } from "polythene-react";
import { keys } from "polythene-react-base";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ fab, renderer, keys }).concat(reactTests),
  renderer
});
