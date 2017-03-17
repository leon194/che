/*
 * Copyright (c) 2015-2017 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */
'use strict';
/**
 * This class is handling the service for the factory loading.
 * @author Ann Shumilova
 */
class LoadFactoryService {
    /**
     * Default constructor that is using resource
     * @ngInject for Dependency injection
     */
    constructor() {
        this.loadFactoryInProgress = false;
        this.currentProgressStep = 0;
        this.loadingSteps = [
            { text: 'Loading factory', inProgressText: '', logs: '', hasError: false },
            { text: 'Initializing workspace', inProgressText: 'Provision workspace and associating it with the existing user', logs: '', hasError: false },
            { text: 'Starting workspace runtime', inProgressText: 'Retrieving the stack\'s image and launching it', logs: '', hasError: false },
            { text: 'Starting workspace agent', inProgressText: 'Agents provide RESTful services like intellisense and SSH', logs: '', hasError: false },
            { text: 'Open IDE', inProgressText: '', logs: '', hasError: false }
        ];
    }
    /**
     * Get the text of the pointed step depending on it's state.
     *
     * @param stepNumber number of the step.
     * @returns {string} steps's text
     */
    getStepText(stepNumber) {
        let entry = this.loadingSteps[stepNumber];
        if (this.currentProgressStep >= stepNumber) {
            return entry.inProgressText;
        }
        else {
            return entry.text;
        }
    }
    /**
     * Returns the information of the factory's loading steps.
     *
     * @returns {Array<any>} loading steps of the factory
     */
    getFactoryLoadingSteps() {
        return this.loadingSteps;
    }
    /**
     * Sets the number of the step, which has to be in progress.
     *
     * @param currentProgressStep step number
     */
    setCurrentProgressStep(currentProgressStep) {
        this.currentProgressStep = currentProgressStep;
    }
    /**
     * Proceeds the flow to the next step.
     */
    goToNextStep() {
        this.currentProgressStep++;
    }
    /**
     * Returns the number of the current step.
     *
     * @returns {number} current step's number
     */
    getCurrentProgressStep() {
        return this.currentProgressStep;
    }
    /**
     * Reset the loading progress.
     */
    resetLoadProgress() {
        this.loadingSteps.forEach((step) => {
            step.logs = '';
            step.hasError = false;
        });
        this.currentProgressStep = 0;
        this.loadFactoryInProgress = false;
    }
    /**
     *  Returns the in-progress state of the whole factory loading flow.
     *
     * @returns {boolean}
     */
    isLoadFactoryInProgress() {
        return this.loadFactoryInProgress;
    }
    /**
     * Sets the in-progress state of the whole factory loading flow.
     *
     * @param value
     */
    setLoadFactoryInProgress(value) {
        this.loadFactoryInProgress = value;
    }
}
exports.LoadFactoryService = LoadFactoryService;
