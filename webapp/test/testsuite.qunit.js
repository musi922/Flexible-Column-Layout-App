sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: flexiblecolumnlayoutapp",
		defaults: {
			page: "ui5://test-resources/flexiblecolumnlayoutapp/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "flexiblecolumnlayoutapp/",
				never: "test-resources/flexiblecolumnlayoutapp/"
			},
			loader: {
				paths: {
					"flexiblecolumnlayoutapp": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for flexiblecolumnlayoutapp"
			},
			"integration/opaTests": {
				title: "Integration tests for flexiblecolumnlayoutapp"
			}
		}
	};
});
