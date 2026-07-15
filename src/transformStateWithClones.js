'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const copyStateAll = [];
  const copyState = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(copyState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (let j = 0; j < action.keysToRemove.length; j++) {
        delete copyState[action.keysToRemove[j]];
      }
    }

    if (action.type === 'clear') {
      for (const key in copyState) {
        delete copyState[key];
      }
    }
    copyStateAll.push({ ...copyState });
  }

  return copyStateAll;
}

module.exports = transformStateWithClones;
