import { runSnapshots } from "../../tests/scripts/react-snapshots";
import { renderer, Icon } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Icon, renderer }).concat(reactTests),
  renderer
});
