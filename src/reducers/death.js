/**
 * Created by natal on 01/06/17.
 */

import {List} from 'immutable';

// import update from "immutability-helper";

export function death(state = new List(), action) {

    if (action.type === 'LISTDEATHEVENTS') {
        const deathEvents = action.deathEvents;
        const deathAnalysis = {
            speed: 0,
            alcohol: 0,
            infrastructure: 0,
            vehicle: 0,
            fatigue: 0,
            visibility: 0,
            drugs: 0,
            cellphone: 0,
            signalAdvance: 0,
            noLicence: 0,
            transitProhibited: 0,
            transitImproper: 0,
            laneChange: 0,
            minimalDistance: 0,
            conversionPreference: 0,
            pedestrianPreference: 0,
            lackOfAttention: 0,
            securityBelt: 0,
            crashProtection: 0,
            preHosp: 0,
            sideObjects: 0,
            helmet: 0
        };
        const loading = !action.loading;
        return Object.assign({}, state, {deathEvents, loading, deathAnalysis});
    }

    if (action.type === 'LISTDEATHOPTIONS') {
        const deathOptions = action.deathOptions;
        return Object.assign({}, state, {deathOptions});
    }

    if (action.type === 'TOGGLEDEATHMODAL') {
        const showModal = !state.showModal;
        return Object.assign({}, state, {showModal});
    }

    if (action.type === 'SELECTDEATHEVENT') {
        const selectedEvent = state.deathEvents[action.id - 1];
        const selectedEventID = selectedEvent.id;
        const deathAnalysis = {};
        return Object.assign({}, state, {selectedEvent, selectedEventID, deathAnalysis});
    }

    if (action.type === 'HANDLEDEATHINPUT') {
        const deathAnalysis = state.deathAnalysis ? state.deathAnalysis : {};
        if(!deathAnalysis[action.subMenu])
            deathAnalysis[action.subMenu]={};
        deathAnalysis[action.subMenu][action.operator]=action.newValue;
        return Object.assign({}, state, {deathAnalysis});
    }

    return state;

}