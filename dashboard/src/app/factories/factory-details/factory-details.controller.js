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
 * Controller for a factory details.
 * @author Florent Benoit
 */
class FactoryDetailsController {
    /**
     * Default constructor that is using resource injection
     * @ngInject for Dependency injection
     */
    constructor($route, cheFactory, cheNotification) {
        'ngInject';
        this.cheFactory = cheFactory;
        let factoryId = $route.current.params.id;
        this.factory = this.cheFactory.getFactoryById(factoryId);
        cheFactory.fetchFactoryById(factoryId).then((factory) => {
            this.factory = factory;
        }, (error) => {
            cheNotification.showError(error.data.message ? error.data.message : 'Get factory failed.');
        });
    }
    /**
     * Returns the factory url based on id.
     * @returns {link.href|*} link value
     */
    getFactoryIdUrl() {
        if (!this.factory) {
            return null;
        }
        return this.cheFactory.getFactoryIdUrl(this.factory);
    }
}
exports.FactoryDetailsController = FactoryDetailsController;
