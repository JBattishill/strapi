'use strict';

/**
 * medical-condition service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::medical-condition.medical-condition');
