'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const copyStateAll = [];
  let stateCopy = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(stateCopy, action.extraData);
        copyStateAll.push({ ...stateCopy });
        break;
      case 'removeProperties':
        for (let j = 0; j < action.keysToRemove.length; j++) {
          delete stateCopy[action.keysToRemove[j]];
        }
        copyStateAll.push({ ...stateCopy });
        break;
      case 'clear':
        stateCopy = {};
        copyStateAll.push({ ...stateCopy });
        break;
    }
  }

  return copyStateAll;
}

module.exports = transformStateWithClones;
