'use strict';

/**
 * login-and-sign-up service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::login-and-sign-up.login-and-sign-up');
