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
const create_factory_controller_1 = require('../create-factory/create-factory.controller');
const factory_from_workpsace_controller_1 = require('../create-factory/workspaces-tab/factory-from-workpsace.controller');
const factory_from_workspace_directive_1 = require('../create-factory/workspaces-tab/factory-from-workspace.directive');
const factory_from_file_controller_1 = require('../create-factory/config-file-tab/factory-from-file.controller');
const factory_from_file_directive_1 = require('../create-factory/config-file-tab/factory-from-file.directive');
const factory_from_template_controller_1 = require('../create-factory/template-tab/factory-from-template.controller');
const factory_from_template_directive_1 = require('../create-factory/template-tab/factory-from-template.directive');
const factory_action_box_controller_1 = require('./action/factory-action-box.controller');
const factory_action_box_directive_1 = require('./action/factory-action-box.directive');
const factory_action_edit_controller_1 = require('./action/factory-action-edit.controller');
const factory_command_controller_1 = require('./command/factory-command.controller');
const factory_command_directive_1 = require('./command/factory-command.directive');
const factory_command_edit_controller_1 = require('./command/factory-command-edit.controller');
const create_factory_git_controller_1 = require('./git/create-factory-git.controller');
const create_factory_git_directive_1 = require('./git/create-factory-git.directive');
class CreateFactoryConfig {
    constructor(register) {
        register.controller('CreateFactoryCtrl', create_factory_controller_1.CreateFactoryCtrl);
        register.controller('FactoryFromWorkspaceCtrl', factory_from_workpsace_controller_1.FactoryFromWorkspaceCtrl);
        register.directive('cdvyFactoryFromWorkspace', factory_from_workspace_directive_1.FactoryFromWorkspace);
        register.controller('FactoryFromFileCtrl', factory_from_file_controller_1.FactoryFromFileCtrl);
        register.directive('cdvyFactoryFromFile', factory_from_file_directive_1.FactoryFromFile);
        register.controller('FactoryFromTemplateCtrl', factory_from_template_controller_1.FactoryFromTemplateCtrl);
        register.directive('cdvyFactoryFromTemplate', factory_from_template_directive_1.FactoryFromTemplate);
        register.controller('FactoryActionBoxController', factory_action_box_controller_1.FactoryActionBoxController);
        register.directive('cdvyFactoryActionBox', factory_action_box_directive_1.FactoryActionBox);
        register.controller('FactoryCommandController', factory_command_controller_1.FactoryCommandController);
        register.directive('cdvyFactoryCommand', factory_command_directive_1.FactoryCommand);
        register.controller('CreateFactoryGitController', create_factory_git_controller_1.CreateFactoryGitController);
        register.directive('cdvyCreateFactoryGit', create_factory_git_directive_1.CreateFactoryGit);
        register.controller('FactoryActionDialogEditController', factory_action_edit_controller_1.FactoryActionDialogEditController);
        register.controller('FactoryCommandDialogEditController', factory_command_edit_controller_1.FactoryCommandDialogEditController);
        // config routes
        register.app.config(($routeProvider) => {
            $routeProvider.accessWhen('/factories/create-factory', {
                title: 'New Factory',
                templateUrl: 'app/factories/create-factory/create-factory.html',
                controller: 'CreateFactoryCtrl',
                controllerAs: 'createFactoryCtrl'
            });
        });
    }
}
exports.CreateFactoryConfig = CreateFactoryConfig;
