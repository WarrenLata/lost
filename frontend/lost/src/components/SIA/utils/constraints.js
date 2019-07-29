import * as annoStatus from '../types/annoStatus'

    /**
     * Check if labels can be changed for a specific annotation
     * 
     * @param allowedActions Actions that are allowed, read from config
     * @param anno Annotation that should be checked
     * @returns {Boolean}
     */
    export function allowedToLabel(allowedActions, anno){
        if (allowedActions.labeling){
            const status = anno.status
            if (!status) return true
            if (status !== annoStatus.NEW){
                if (allowedActions.edit.label){
                    return true
                } else {
                    console.warn('You may not edit the label of this annotation as defined by config!', anno)
                    return false
                }
            } else {
                // Return always true if labeling is allowed in general
                // and annotation was not edited (it was NEW)
                return true
            }
        } else {
            console.warn('You may not edit the label of this annotation as defined by config!', anno)
            return false
        }
    }

    /**
     * Check if config allows to delete a specific annotation.
     * 
     * @param allowedActions Actions that are allowed, read from config
     * @param anno Annotation that should be checked
     * @returns {Boolean}
     */
    export function allowedToDelete(allowedActions, anno){
        const status = anno.status
        if (!status) return true
        if (status !== annoStatus.NEW){
            if(allowedActions.edit.delete){
                return true
            } else {
                console.warn('You may not delete this annotation as defined by config!', anno)
                return false
            }
        } else {
            return true
        }
    }

    /**
     * Check if config allows to edit bounds a specific annotation.
     * 
     * @param allowedActions Actions that are allowed, read from config
     * @param anno Annotation that should be checked
     * @returns {Boolean}
     */
    export function allowedToEditBounds(allowedActions, anno){
        const status = anno.status
        if (!status) return true
        if (status !== annoStatus.NEW){
            if(allowedActions.edit.bounds){
                return true
            } else {
                console.warn('You may not edit bounds of this annotation as defined by config!', anno)
                return false
            }
        } else {
            return true
        }
    }