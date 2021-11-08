import Outline from "../layers/Outline.js";
import Center from "../layers/Center.js";
import Circles from "../layers/Circles.js";
import Lines from "../layers/Lines.js";
import DottedLines from "../layers/DottedLines.js";
import Ring from "../layers/Ring.js";
import Wave from "../layers/Wave.js";

export default [
	{
		class: Outline,
		weight: 0.7
	},
	{
		class: Center,
		weight: 0.7
	},
	{
		class: Circles,
		weight: 0.7
	},
	{
		class: Lines,
		weight: 0.7
	},
	{
		class: DottedLines,
		weight: 0.5
	},
	{
		class: Ring,
		weight: 0.7
	},
	{
		class: Wave,
		weight: 0.3
	}
];
