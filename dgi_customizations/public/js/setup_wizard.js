frappe.provide("dgi.setup");


frappe.setup.on("before_load", function () {
    frappe.setup.remove_slide("domain");    
    dgi.setup.slides_settings.map(frappe.setup.add_slide);
});

dgi.setup.slides_settings = [{
            // Domain
            name: 'domain',
            title: __('What do you do?'),
            fields: [{
                fieldname: 'domains',
                label: __('Domains'),
                fieldtype: 'MultiCheck',
                options: [{
                        "label": __("Distribution"),
                        "value": "Distribution"
                    },
                    {
                        "label": __("Manufacturing"),
                        "value": "Manufacturing"
                    },
                    {
                        "label": __("Retailing"),
                        "value": "Retailing"
                    },
                    {
                        "label": __("Cultivation"),
                        "value": "Cultivation"
                    }
                ],
                reqd: 1
            }, ],
            // help: __('Select the nature of your business.'),
            validate: function () {
                if (this.values.domains.length === 0) {
                    frappe.msgprint(__("Please select at least one domain."));
                    return false;
                }
                frappe.setup.domains = this.values.domains;
                return true;
            },
        },
    ];