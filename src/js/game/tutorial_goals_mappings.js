import { MetaBuilding, defaultBuildingVariant } from "./meta_building";
import { MetaCutterBuilding, enumCutterVariants } from "./buildings/cutter";
import { MetaRotaterBuilding, enumRotaterVariants } from "./buildings/rotater";
import { MetaPainterBuilding, enumPainterVariants } from "./buildings/painter";
import { MetaMixerBuilding } from "./buildings/mixer";
import { MetaStackerBuilding } from "./buildings/stacker";
import { MetaBalancerBuilding, enumBalancerVariants } from "./buildings/balancer";
import { MetaUndergroundBeltBuilding, enumUndergroundBeltVariants } from "./buildings/underground_belt";
import { MetaMinerBuilding, enumMinerVariants } from "./buildings/miner";
import { MetaTrashBuilding, enumTrashVariants } from "./buildings/trash";

/** @typedef {Array<[typeof MetaBuilding, string]>} TutorialGoalReward */

import { enumHubGoalRewards } from "./tutorial_goals";
import { MetaReaderBuilding } from "./buildings/reader";
import { MetaDisplayBuilding } from "./buildings/display";
import { MetaConstantSignalBuilding } from "./buildings/constant_signal";

/**
 * Helper method for proper types
 *  @returns {TutorialGoalReward}
 */
const typed = x => x;

/**
 * Stores which reward unlocks what
 * @enum {TutorialGoalReward?}
 */
export const enumHubGoalRewardsToContentUnlocked = {
    [enumHubGoalRewards.reward_cutter_and_trash]: typed([[MetaCutterBuilding, defaultBuildingVariant]]),
    [enumHubGoalRewards.reward_rotater]: typed([[MetaRotaterBuilding, defaultBuildingVariant]]),
    [enumHubGoalRewards.reward_painter]: typed([[MetaPainterBuilding, defaultBuildingVariant]]),
    [enumHubGoalRewards.reward_mixer]: typed([[MetaMixerBuilding, defaultBuildingVariant]]),
    [enumHubGoalRewards.reward_stacker]: typed([[MetaStackerBuilding, defaultBuildingVariant]]),
    [enumHubGoalRewards.reward_balancer]: typed([[MetaBalancerBuilding, defaultBuildingVariant]]),
    [enumHubGoalRewards.reward_tunnel]: typed([[MetaUndergroundBeltBuilding, defaultBuildingVariant]]),

    [enumHubGoalRewards.reward_rotater_ccw]: typed([[MetaRotaterBuilding, enumRotaterVariants.ccw]]),
    [enumHubGoalRewards.reward_rotater_180]: typed([[MetaRotaterBuilding, enumRotaterVariants.rotate180]]),
    [enumHubGoalRewards.reward_miner_chainable]: typed([[MetaMinerBuilding, enumMinerVariants.chainable]]),
    [enumHubGoalRewards.reward_underground_belt_tier_2]: typed([
        [MetaUndergroundBeltBuilding, enumUndergroundBeltVariants.tier2],
    ]),
    [enumHubGoalRewards.reward_splitter]: typed([[MetaBalancerBuilding, enumBalancerVariants.splitter]]),
    [enumHubGoalRewards.reward_merger]: typed([[MetaBalancerBuilding, enumBalancerVariants.merger]]),
    [enumHubGoalRewards.reward_cutter_quad]: typed([[MetaCutterBuilding, enumCutterVariants.quad]]),
    [enumHubGoalRewards.reward_painter_double]: typed([[MetaPainterBuilding, enumPainterVariants.double]]),
    [enumHubGoalRewards.reward_painter_quad]: typed([[MetaPainterBuilding, enumPainterVariants.quad]]),
    [enumHubGoalRewards.reward_storage]: typed([[MetaTrashBuilding, enumTrashVariants.storage]]),

    [enumHubGoalRewards.reward_belt_reader]: typed([[MetaReaderBuilding, defaultBuildingVariant]]),
    [enumHubGoalRewards.reward_display]: typed([[MetaDisplayBuilding, defaultBuildingVariant]]),
    [enumHubGoalRewards.reward_constant_signal]: typed([
        [MetaConstantSignalBuilding, defaultBuildingVariant],
    ]),
    [enumHubGoalRewards.reward_second_wire]: null, // @TODO!

    [enumHubGoalRewards.reward_wires_filters_and_levers]: null,
    [enumHubGoalRewards.reward_freeplay]: null,
    [enumHubGoalRewards.no_reward]: null,
    [enumHubGoalRewards.no_reward_freeplay]: null,
};
