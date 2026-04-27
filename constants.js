const SPECIAL_FUNCTIONS = ["5", "6", "7", "8"];

const LABELS = {
  requestField: "REQUEST FIELD DESCRIPTION",
  responseField: "RESPONSE FIELD DESCRIPTION",
  json: "JSON"
};

const SECTION_CONTENT = "section-content"

const RENDER_SECTION = ""

const TABLE = "table"

const COUNTRY_KEYS = ["6.3.6", "5.3.6"];
const COUNTRY_LINK = "#Country";

const PROVINCE_KEYS = ["5.3.7", "6.3.7"];
const PROVINCE_LINK = "#Province%20Codes";

const COVERAGE_KEYS = ["5.5.9", "6.6.10"];
const COVERAGE_LINK = "#Extended%20Health%20Coverage";

const GENDER_KEYS = ["5.6.6", "5.8.4", "6.7.6", "6.9.12", "6.10.11"];
const GENDER_LINK = "#Gender%20Codes";

const DIVISION_KEYS = ["5.7.5", "5.7.9", "6.8.5", "6.8.9"];
const DIVISION_LINK = "#Billing%20Division%20and%20Class%20Codes";

const EMPLOYMENT_KEYS = ["5.7.11", "6.8.11"];
const EMPLOYMENT_LINK = "#Employment%20Status";

// const EARNING_KEYS = ["5.7.12"];
// const EARNING_LINK = "#Earning%20Frequency";

const TABLE_STYLES = {
  border: "1px solid #ccc",
  padding: "6px"
};
const ERROR_MESSAGES = {
  copyFailed: "Copy failed",
  loadFailed: "Failed to load JSON"
};
const EXCLUDED_HEADINGS = ["Purpose", "Appendix"];
const REQUEST_BODIES = {
  "add-single": `{
    "API-Key": "abc123",
    "username": "en@groupbenefitz.ca",
    "password": "PXXXXXXXX",
    "function": "add-single",

  "member": {
    "body": [
      {
        "policy": {
          "policyNo": null,
          "clientCode": "BFRB"
        },
        "address": {
          "city": "Ontario",
          "line1": "1000 innovation drive",
          "line2": "",
          "line3": "",
          "country": "CAN",
          "province": "ON",
          "postalCode": "K2K4E7",
          "effectiveDate": "04/01/2026"
        },
        "contact": {
          "email": "zdnjsixtyeight@aitestpro.com",
          "extension": null,
          "homePhone": "(234) 567-8901"
        },
        "coverage": {
          "familyStatus": "S",
          "effectiveDate": "04/01/2026",
          "overrideCoverage": "",
          "lateEntranceIndicator": false,
          "lateEntranceStartDate": null,
          "nihbElectionIndicator": false,
          "ramqElectionIndicator": false,
          "extendedHealthCoverage": "S",
          "psaContributionDeposit": null,
          "hcsaContributionDeposit": null
        },
        "personal": {
          "gender": "M",
          "suffix": null,
          "language": "EN",
          "lastName": "Test",
          "birthDate": "10/10/1990",
          "firstName": "Zdnjsixtyeight",
          "middleName": null,
          "salutation": null,
          "smokerIndicator": null
        },
        "employment": {
          "salary": "1",
          "hireDate": "01/01/2026",
          "jobTitle": "It",
          "classCode": "2",
          "sinNumber": null,
          "alternateId": null,
          "workPercentage": null,
          "salaryTypeCode1": "AN",
          "salaryTypeCode2": null,
          "workHoursPerWeek": 40,
          "billingDivisionNumber": "40000",
          "employmentProvinceCode": "ON",
          "employmentStatusTypeCode": "A"
        }
      }
    ]
  },
  `,
  "add-family": `{
    "API-Key": "abc123",
    "username": "en@groupbenefitz.ca",
    "password": "sXXXX",
    "function": "add-family",

    "member": {

        "body": [
            {
                "policy": {
                    "policyNo": null,
                    "clientCode": "BFLX"
                },
                "coverage": {
                    "effectiveDate": "03/01/2026",
                    "familyStatus": "",
                    "extendedHealthCoverage": "F1",
                    "overrideCoverage": "",
                    "lateEntranceIndicator": false,
                    "lateEntranceStartDate": null,
                    "nihbElectionIndicator": false,
                    "ramqElectionIndicator": false,
                    "psaContributionDeposit": null,
                    "hcsaContributionDeposit": null
                },
                "personal": {
                    "firstName": "ZmakOutsider",
                    "lastName": "test",
                    "middleName": "ak",
                    "birthDate": "01/01/2000",
                    "gender": "M",
                    "language": "E",
                    "suffix": null,
                    "salutation": null,
                    "smokerIndicator": null
                },
                "contact": {
                    "email": "ZmakOutsidertest@aitestpro.com",
                    "homePhone": "1234567890",
                    "extension": null
                },
                "address": {
                    "line1": "1000, innovation",
                    "line2": "1002, innovation",
                    "line3": "1003, innovation",
                    "city": "ottawa",
                    "province": "ON",
                    "country": "CAN",
                    "postalCode": "K2K3E7",
                    "effectiveDate": "03/01/2026"
                },
                "employment": {
                    "salary": null,
                    "hireDate": "01/01/2026",
                    "sinNumber": null,
                    "alternateId": null,
                    "billingDivisionNumber": "41000",
                    "employmentProvinceCode": "ON",
                    "employmentStatusTypeCode": "A",
                    "workPercentage": null,
                    "classCode": "",
                    "employmentType": "",
                    "jobTitle": "",
                    "workHoursPerWeek": ""
                },
            }
        ]

    },
    "dependents": [
        {
            "spouse": [
                {
                    "emails": [
                        {
                            "emailAddress": "Zspouse@provizi.com",
                            "effectiveDate": "03/01/2026",
                            "emailTypeCode": "WB"
                        }
                    ],
                    "phones": [
                        {
                            "phoneNumber": "1234567890",
                            "effectiveDate": "03/01/2026",
                            "phoneTypeCode": "CE",
                            "phoneExtension": null
                        }
                    ],
                    "suffix": null,
                    "firstName": "ZSpouseFirst",
                    "lastName": "TEST",
                    "middleName": "fak",
                    "gender": "F",
                    "birthDate": "02/01/2002",
                    "language": "",
                    "effectiveDate": "03/01/2026",
                    "participantTypeCode": "SP",
                    "schoolIndicator": null,
                    "hasOtherCoverage": true,
                    "otherCoverageType": "S",
                    "lateEntranceIndicator": false,
                    "lateEntranceStartDate": null,
                    "nihbElectionIndicator": false,
                    "ramqElectionIndicator": false
                }
            ],
            "children": [
                {
                    "emails": [
                        {
                            "emailAddress": "zchild@provizi.com",
                            "effectiveDate": "03/01/2026",
                            "emailTypeCode": "WB"
                        }
                    ],
                    "phones": [
                        {
                            "phoneNumber": "1234567890",
                            "effectiveDate": "03/01/2026",
                            "phoneTypeCode": "CE",
                            "phoneExtension": ""
                        }
                    ],
                    "firstName": "ZCHILDFIRST",
                    "lastName": "TEST",
                    "middleName": "cak",
                    "gender": "F",
                    "birthDate": "02/01/2004",
                    "language": "",
                    "effectiveDate": "03/01/2026",
                    "participantTypeCode": "AD",
                    "schoolIndicator": true,
                    "hasOtherCoverage": false,
                    "otherCoverageType": null,
                    "lateEntranceIndicator": false,
                    "lateEntranceStartDate": null,
                    "nihbElectionIndicator": false,
                    "ramqElectionIndicator": false
                }
            ]
        }
    ],`,
  "search-member": `{
    "API-Key": "abc123",
    "username": "user",
    "password": "PXXXXXXX",
    "function": "search-member",
 
    "enrollment": {
 
        "search": {
 
            "body": [
                {
                    "firstName": "",
                    "lastName": "",
                    "certificate": "121212",
                    "employeeNumber": "121",
                    "birthDate": "",
                    "classCode": "",
                    "divisionCode": "",
                    "status": "null",
                    "statusReason": "",
                    "sectionId": "",
                    "sortField": "",
                    "sortOrder": "",
                    "currentPage": ""
                }
            ]
        },
 
        "form": {
           
            "body": []
        }
    },
}`,
  "terminate": `{
    "API-Key": "abc123",
    "username": "en@groupbenefitz.ca",
    "password": "PXXXXXXXX",
    "function": "terminate-member",
 
    "terminate": {
        "query_params": [
            {
                "identifier": "12XX",
                "markAsDeceased": true
            }
        ],
        "body": [
            {
                "terminationDate": "03/01/2026",
                "dependentCovered": true,
                "reason": "AU",
                "dependentNumbers": ["00"]
            }
        ]
    }
}`
};
const RESPONSE_MAP = {
  "add-single": {
    success: `{
        "logType": "INFO",
        "result": "Passed",
        "duration": "7559ms",
        "item": "Request_Item_1",
        "ainfo2": "Status: 200",
        "classLine": "",
        "sinfo": "POST",
        "ainfo": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/",
        "step": "Step_2",
        "dataset": "Dataset_1",
        "testcase": "add_member",
        "timestamp": "2026-04-27T10:11:38.892Z",
        "execution_details": [
            {
                "requestId": "-6e8e05d0",
                "requestUrl": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/",
                "requestBody": {
                    "policyNo": null,
                    "clientCode": "BFLX",
                    "dependents": [],
                    "effectiveDate": "2026-05-01",
                    "planMemberDetail": {
                        "suffix": "",
                        "lastName": "test",
                        "birthDate": "2000-01-01",
                        "firstName": "Zsukeshtwo",
                        "salutation": "",
                        "sexTypeCode": "M",
                        "languageCode": "EN",
                        "middleInitial": null,
                        "smokerIndicator": null,
                        "preferredFirstName": "zz",
                        "lateEntranceIndicator": false,
                        "lateEntranceStartDate": null,
                        "nihbElectionIndicator": false,
                        "ramqElectionIndicator": false
                    },
                    "planMemberSalary": null,
                    "planMemberCoverage": {
                        "familyStatusCode": "F1",
                        "overrideCoverage": null
                    },
                    "planMemberContactInfo": {
                        "email": {
                            "emailAddress": "Zsukeshtwo@aitestpro.com",
                            "effectiveDate": "2026-05-01"
                        },
                        "phone": {
                            "phoneNumber": "1234567890",
                            "effectiveDate": "2026-05-01",
                            "phoneExtension": null
                        },
                        "address": {
                            "cityName": "ottawa",
                            "postalCode": "K2K3E7",
                            "countryCode": "CAN",
                            "provinceCode": "ON",
                            "effectiveDate": "2026-05-01",
                            "addressLineOne": "1000, innovation",
                            "addressLineTwo": "1002, innovation",
                            "addressLineThree": "1003, innovation"
                        }
                    },
                    "extendedHealthCoverage": "F1",
                    "psaContributionDeposit": null,
                    "hcsaContributionDeposit": null,
                    "planMemberEmploymentInfo": {
                        "sinNumber": null,
                        "alternateId": null,
                        "employmentDate": "2026-01-01",
                        "familyStatusCode": "F1",
                        "isCanadianCitizen": null,
                        "clientDefinedField1": "A",
                        "provinceOfResidence": "ON",
                        "billingDivisionNumber": 41000,
                        "employmentProvinceCode": "ON",
                        "employmentStatusTypeCode": "A"
                    }
                },
                "requestQueryParams": {},
                "responseHeaders": {
                    "access-control-allow-credentials": "true",
                    "access-control-allow-origin": "https://adminportal.greenshield.ca",
                    "alt-svc": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000",
                    "content-type": "application/json; charset=utf-8",
                    "date": "Mon, 27 Apr 2026 10:11:36 GMT",
                    "server-timing": "dtTrId;desc=\"f7ac580bd4373eb048dc2d890348baf7\", dtSInfo;desc=\"0\", dtRpid;desc=\"-940479246\"",
                    "set-cookie": "dtCookie=v_4_srv_3_sn_4F9B3ED3A39839A347AE20F91941B104_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_1_rcs-3Acss_0; Path=/; Domain=.greenshield.ca",
                    "strict-transport-security": "max-age=2592000",
                    "timing-allow-origin": "*",
                    "transfer-encoding": "chunked",
                    "via": "1.1 google, 1.1 google",
                    "x-correlation-id": "475df5dc-99a3-4398-9590-4bd56801f1fd",
                    "x-request-id": "2ad6455f-b48c-417e-ba7e-f4909dee4225",
                    "x-response-time-ms": "7252",
                    "x-routed-backend": "canary"
                },
                "responseBody": {
                    "subscriberId": 19780079,
                    "validationWarnings": []
                }
            }
        ]
    },
`,
    error1: `
    {
        "logType": "ERROR",
        "result": "Failed",
        "duration": "1117ms",
        "item": "Request_Item_1",
        "ainfo2": "Status: 400",
        "classLine": "",
        "sinfo": "POST",
        "ainfo": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/",
        "step": "Step_2",
        "dataset": "Dataset_1",
        "testcase": "add_member",
        "timestamp": "2026-03-09T09:04:35.890Z",
        "execution_details": [
            {
                "requestId": "-6e8e05d0",
                "requestUrl": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/",
                "requestBody": {
                    "policyNo": null,
                    "clientCode": "BFLX",
                    "dependents": [],
                    "effectiveDate": "2026-03-01",
                    "planMemberDetail": {
                        "suffix": "",
                        "lastName": "test",
                        "birthDate": "2000-01-01",
                        "firstName": "ZmakOutsider",
                        "salutation": "",
                        "sexTypeCode": "M",
                        "languageCode": "E",
                        "middleInitial": "ak",
                        "smokerIndicator": null,
                        "preferredFirstName": "zz",
                        "lateEntranceIndicator": null,
                        "lateEntranceStartDate": null,
                        "nihbElectionIndicator": null,
                        "ramqElectionIndicator": null
                    },
                    "planMemberSalary": null,
                    "planMemberCoverage": {
                        "familyStatusCode": "",
                        "overrideCoverage": null
                    },
                    "planMemberContactInfo": {
                        "email": {
                            "emailAddress": "ZmakOutsidertest@aitestpro.com",
                            "effectiveDate": "2026-03-01"
                        },
                        "phone": {
                            "phoneNumber": "1234567890",
                            "effectiveDate": "2026-03-01",
                            "phoneExtension": null
                        },
                        "address": {
                            "cityName": "ottawa",
                            "postalCode": "K2K3E7",
                            "countryCode": "CAN",
                            "provinceCode": "ON",
                            "effectiveDate": "2026-03-01",
                            "addressLineOne": "1000, innovation",
                            "addressLineTwo": "1002, innovation",
                            "addressLineThree": "1003, innovation"
                        }
                    },
                    "extendedHealthCoverage": "F1",
                    "psaContributionDeposit": null,
                    "hcsaContributionDeposit": null,
                    "planMemberEmploymentInfo": {
                        "sinNumber": null,
                        "alternateId": null,
                        "employmentDate": "2026-01-01",
                        "familyStatusCode": "",
                        "isCanadianCitizen": null,
                        "clientDefinedField1": "A",
                        "provinceOfResidence": "ON",
                        "billingDivisionNumber": "41000",
                        "employmentProvinceCode": "ON",
                        "employmentStatusTypeCode": "A"
                    }
                },
                "requestQueryParams": {},
                "responseBody": [
                    {
                        "errorCode": "err_update_plan_member_info_language_code_invalid",
                        "errorDescription": "err_update_plan_member_info_language_code_invalid",
                        "localizedErrorDescription": {
                            "en": "LanguageCode is invalid",
                            "fr": "Le code de langue n'est pas valide"
                        },
                        "errorSeverity": "Error",
                        "errorFields": [
                            "LanguageCode"
                        ],
                        "metaData": {
                            "index": null,
                            "errorMessage": {
                                "en": "LanguageCode is invalid",
                                "fr": "Le code de langue n'est pas valide"
                            }
                        }
                    },
                    }
                ]
            }
        ]
    },`
  },
  "add-family": {
    success: `{
        "logType": "INFO",
        "result": "Passed",
        "duration": "7559ms",
        "item": "Request_Item_1",
        "ainfo2": "Status: 200",
        "classLine": "",
        "sinfo": "POST",
        "ainfo": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/",
        "step": "Step_2",
        "dataset": "Dataset_1",
        "testcase": "add_member",
        "timestamp": "2026-04-27T10:11:38.892Z",
        "execution_details": [
            {
                "requestId": "-6e8e05d0",
                "requestUrl": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/",
                "requestBody": {
                    "policyNo": null,
                    "clientCode": "BFLX",
                    "dependents": [
                        {
                            "emails": [
                                {
                                    "emailAddress": "Zspouse@provizi.com",
                                    "effectiveDate": "2026-05-01",
                                    "emailTypeCode": "WB"
                                }
                            ],
                            "phones": [
                                {
                                    "phoneNumber": "1234567890",
                                    "effectiveDate": "2026-05-01",
                                    "phoneTypeCode": "CE",
                                    "phoneExtension": null
                                }
                            ],
                            "suffix": null,
                            "lastName": "TEST",
                            "birthDate": "2002-02-01",
                            "firstName": "ZSpouseFirst",
                            "salutation": null,
                            "sexTypeCode": "F",
                            "effectiveDate": "2026-05-01",
                            "middleInitial": null,
                            "coverageEndDate": null,
                            "schoolIndicator": null,
                            "hasOtherCoverage": true,
                            "otherCoverageType": "S",
                            "preferredFirstName": null,
                            "participantTypeCode": "SP",
                            "lateEntranceIndicator": false,
                            "lateEntranceStartDate": null,
                            "nihbElectionIndicator": false,
                            "ramqElectionIndicator": false
                        },
                        {
                            "emails": [
                                {
                                    "emailAddress": "zchild@provizi.com",
                                    "effectiveDate": "2026-05-01",
                                    "emailTypeCode": "WB"
                                }
                            ],
                            "phones": [
                                {
                                    "phoneNumber": "1234567890",
                                    "effectiveDate": "2026-05-01",
                                    "phoneTypeCode": "CE",
                                    "phoneExtension": ""
                                }
                            ],
                            "suffix": null,
                            "lastName": "TEST",
                            "birthDate": "2004-02-01",
                            "firstName": "ZCHILDFIRST",
                            "salutation": null,
                            "sexTypeCode": "F",
                            "effectiveDate": "2026-05-01",
                            "middleInitial": null,
                            "coverageEndDate": null,
                            "schoolIndicator": true,
                            "hasOtherCoverage": false,
                            "otherCoverageType": null,
                            "preferredFirstName": null,
                            "participantTypeCode": "AD",
                            "lateEntranceIndicator": false,
                            "lateEntranceStartDate": null,
                            "nihbElectionIndicator": false,
                            "ramqElectionIndicator": false
                        }
                    ],
                    "effectiveDate": "2026-05-01",
                    "planMemberDetail": {
                        "suffix": "",
                        "lastName": "test",
                        "birthDate": "2000-01-01",
                        "firstName": "Zsukeshtwo",
                        "salutation": "",
                        "sexTypeCode": "M",
                        "languageCode": "EN",
                        "middleInitial": null,
                        "smokerIndicator": null,
                        "preferredFirstName": "zz",
                        "lateEntranceIndicator": false,
                        "lateEntranceStartDate": null,
                        "nihbElectionIndicator": false,
                        "ramqElectionIndicator": false
                    },
                    "planMemberSalary": null,
                    "planMemberCoverage": {
                        "familyStatusCode": "F1",
                        "overrideCoverage": null
                    },
                    "planMemberContactInfo": {
                        "email": {
                            "emailAddress": "Zsukeshtwo@aitestpro.com",
                            "effectiveDate": "2026-05-01"
                        },
                        "phone": {
                            "phoneNumber": "1234567890",
                            "effectiveDate": "2026-05-01",
                            "phoneExtension": null
                        },
                        "address": {
                            "cityName": "ottawa",
                            "postalCode": "K2K3E7",
                            "countryCode": "CAN",
                            "provinceCode": "ON",
                            "effectiveDate": "2026-05-01",
                            "addressLineOne": "1000, innovation",
                            "addressLineTwo": "1002, innovation",
                            "addressLineThree": "1003, innovation"
                        }
                    },
                    "extendedHealthCoverage": "F1",
                    "psaContributionDeposit": null,
                    "hcsaContributionDeposit": null,
                    "planMemberEmploymentInfo": {
                        "sinNumber": null,
                        "alternateId": null,
                        "employmentDate": "2026-01-01",
                        "familyStatusCode": "F1",
                        "isCanadianCitizen": null,
                        "clientDefinedField1": "A",
                        "provinceOfResidence": "ON",
                        "billingDivisionNumber": 41000,
                        "employmentProvinceCode": "ON",
                        "employmentStatusTypeCode": "A"
                    }
                },
                "requestQueryParams": {},
                "responseHeaders": {
                    "access-control-allow-credentials": "true",
                    "access-control-allow-origin": "https://adminportal.greenshield.ca",
                    "alt-svc": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000",
                    "content-type": "application/json; charset=utf-8",
                    "date": "Mon, 27 Apr 2026 10:11:36 GMT",
                    "server-timing": "dtTrId;desc=\"f7ac580bd4373eb048dc2d890348baf7\", dtSInfo;desc=\"0\", dtRpid;desc=\"-940479246\"",
                    "set-cookie": "dtCookie=v_4_srv_3_sn_4F9B3ED3A39839A347AE20F91941B104_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_1_rcs-3Acss_0; Path=/; Domain=.greenshield.ca",
                    "strict-transport-security": "max-age=2592000",
                    "timing-allow-origin": "*",
                    "transfer-encoding": "chunked",
                    "via": "1.1 google, 1.1 google",
                    "x-correlation-id": "475df5dc-99a3-4398-9590-4bd56801f1fd",
                    "x-request-id": "2ad6455f-b48c-417e-ba7e-f4909dee4225",
                    "x-response-time-ms": "7252",
                    "x-routed-backend": "canary"
                },
                "responseBody": {
                    "subscriberId": 19780079,
                    "validationWarnings": []
                }
            }
        ]
    },`,
    error1: `{
        "logType": "ERROR",
        "result": "Failed",
        "duration": "2850ms",
        "item": "Request_Item_1",
        "ainfo2": "Status: 400",
        "classLine": "",
        "sinfo": "POST",
        "ainfo": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/",
        "step": "Step_2",
        "dataset": "Dataset_1",
        "testcase": "add_member",
        "timestamp": "2026-04-27T09:43:44.021Z",
        "execution_details": [
            {
                "requestId": "-6e8e05d0",
                "requestUrl": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/",
                "requestBody": {
                    "policyNo": null,
                    "clientCode": "BFLX",
                    "dependents": [
                        {
                            "emails": [
                                {
                                    "emailAddress": "Zspouse@provizi.com",
                                    "effectiveDate": "2026-07-01",
                                    "emailTypeCode": "WB"
                                }
                            ],
                            "phones": [
                                {
                                    "phoneNumber": "1234567890",
                                    "effectiveDate": "2026-07-01",
                                    "phoneTypeCode": "CE",
                                    "phoneExtension": null
                                }
                            ],
                            "suffix": null,
                            "lastName": "TEST",
                            "birthDate": "2002-02-01",
                            "firstName": "ZSpouseFirst",
                            "salutation": null,
                            "sexTypeCode": "F",
                            "effectiveDate": "2026-07-01",
                            "middleInitial": "fak",
                            "coverageEndDate": null,
                            "schoolIndicator": null,
                            "hasOtherCoverage": true,
                            "otherCoverageType": "S",
                            "preferredFirstName": null,
                            "participantTypeCode": "SP",
                            "lateEntranceIndicator": false,
                            "lateEntranceStartDate": null,
                            "nihbElectionIndicator": false,
                            "ramqElectionIndicator": false
                        },
                        {
                            "emails": [
                                {
                                    "emailAddress": "zchild@provizi.com",
                                    "effectiveDate": "2026-07-01",
                                    "emailTypeCode": "WB"
                                }
                            ],
                            "phones": [
                                {
                                    "phoneNumber": "1234567890",
                                    "effectiveDate": "2026-07-01",
                                    "phoneTypeCode": "CE",
                                    "phoneExtension": ""
                                }
                            ],
                            "suffix": null,
                            "lastName": "TEST",
                            "birthDate": "2004-02-01",
                            "firstName": "ZCHILDFIRST",
                            "salutation": null,
                            "sexTypeCode": "F",
                            "effectiveDate": "2026-07-01",
                            "middleInitial": "cak",
                            "coverageEndDate": null,
                            "schoolIndicator": true,
                            "hasOtherCoverage": false,
                            "otherCoverageType": null,
                            "preferredFirstName": null,
                            "participantTypeCode": "AD",
                            "lateEntranceIndicator": false,
                            "lateEntranceStartDate": null,
                            "nihbElectionIndicator": false,
                            "ramqElectionIndicator": false
                        }
                    ],
                    "effectiveDate": "2026-07-01",
                    "planMemberDetail": {
                        "suffix": "",
                        "lastName": "test",
                        "birthDate": "2000-01-01",
                        "firstName": "ZmakOutsider",
                        "salutation": "",
                        "sexTypeCode": "M",
                        "languageCode": "E",
                        "middleInitial": "ak",
                        "smokerIndicator": null,
                        "preferredFirstName": "zz",
                        "lateEntranceIndicator": false,
                        "lateEntranceStartDate": null,
                        "nihbElectionIndicator": false,
                        "ramqElectionIndicator": false
                    },
                    "planMemberSalary": null,
                    "planMemberCoverage": {
                        "familyStatusCode": null,
                        "overrideCoverage": null
                    },
                    "planMemberContactInfo": {
                        "email": {
                            "emailAddress": "ZmakOutsidertest@aitestpro.com",
                            "effectiveDate": "2026-07-01"
                        },
                        "phone": {
                            "phoneNumber": "1234567890",
                            "effectiveDate": "2026-07-01",
                            "phoneExtension": null
                        },
                        "address": {
                            "cityName": "ottawa",
                            "postalCode": "K2K3E7",
                            "countryCode": "CAN",
                            "provinceCode": "ON",
                            "effectiveDate": "2026-07-01",
                            "addressLineOne": "1000, innovation",
                            "addressLineTwo": "1002, innovation",
                            "addressLineThree": "1003, innovation"
                        }
                    },
                    "extendedHealthCoverage": "F1",
                    "psaContributionDeposit": null,
                    "hcsaContributionDeposit": null,
                    "planMemberEmploymentInfo": {
                        "sinNumber": null,
                        "alternateId": null,
                        "employmentDate": "2026-01-01",
                        "familyStatusCode": "",
                        "isCanadianCitizen": null,
                        "clientDefinedField1": "A",
                        "provinceOfResidence": "ON",
                        "billingDivisionNumber": 41000,
                        "employmentProvinceCode": "ON",
                        "employmentStatusTypeCode": "A"
                    }
                },
                "requestQueryParams": {},
                "responseBody": [
                    {
                        "errorCode": "err_update_plan_member_info_language_code_invalid",
                        "errorDescription": "err_update_plan_member_info_language_code_invalid",
                        "localizedErrorDescription": {
                            "en": "LanguageCode is invalid",
                            "fr": "Le code de langue n'est pas valide"
                        },
                        "errorSeverity": "Error",
                        "errorFields": [
                            "LanguageCode"
                        ],
                    {
                        "errorCode": "err_update_plan_member_coverage_family_status_code_required",
                        "errorDescription": "err_update_plan_member_coverage_family_status_code_required",
                        "localizedErrorDescription": {
                            "en": "FamilyStatusCode is required",
                            "fr": "Le code de type de familie est requis"
                        },
                        "errorSeverity": "Error",
                        "errorFields": [
                            "FamilyStatusCode"
                        ],
                        "metaData": {
                            "index": null,
                            "errorMessage": {
                                "en": "FamilyStatusCode is required",
                                "fr": "Le code de type de familie est requis"
                            }
                        }
                    },
            }
        ]
    },`
  },
  "search-member": {
    success: `    {
        "logType": "INFO",
        "result": "Passed",
        "duration": "1331ms",
        "item": "Request_Item_1",
        "ainfo2": "Status: 200",
        "classLine": "",
        "sinfo": "POST",
        "ainfo": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/search",
        "step": "Step_3",
        "dataset": "Dataset_1",
        "testcase": "member_search",
        "timestamp": "2026-04-27T06:16:54.544Z",
        "execution_details": [
            {
                "requestId": "3a5d1d8e",
                "requestUrl": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/search",
                "requestBody": {
                    "keyword": null,
                    "lastName": null,
                    "pageSize": 25,
                    "firstName": "",
                    "classCodes": [],
                    "pageNumber": 1,
                    "clientCodes": [
                        "BFLX"
                    ],
                    "sortingFields": [
                        {
                            "order": "asc",
                            "fieldName": "FirstName"
                        }
                    ],
                    "subscriberIds": [
                        "19728430"
                    ],
                    "statusTypeCodes": [],
                    "billingDivisions": [],
                    "subscriberAlternateIds": []
                },
                "requestQueryParams": {},
                "responseBody": {
        "totalCount": 1,
        "results": [
        {
            "planMemberId": "19728430",
            "id": "19728430",
            "clientId": 12944,
            "tpaId": null,
            "tpaCode": null,
            "lastName": "TEST",
            "firstName": "Z SUKESH",
            "middleInitial": null,
            "birthDate": "2003-06-06T00:00:00",
            "sexTypeCode": "M",
            "preferredFirstName": null,
            "partTypeCode": "SU",
            "statusReasonCode": "AU",
            "statusTypeCode": "T",
            "classCode": null,
            "alternateId": null,
            "subscriberAlternateId": null,
            "effectiveDate": "2026-05-01T00:00:00",
            "billingDivisionNumber": 41001,
            "billingDivisionDescription": {
                "en": "THE GROUPBENEFITZ CLASSIC GIG",
                "fr": "THE GROUPBENEFITZ CLASSIC GIG"
            },
            "businessName": {
                "en": "BENEFLEX",
                "fr": "BENEFLEX"
            },
            "clientCode": "BFLX",
            "policyNo": null,
            "familyStatusCode": "S",
            "hoursPerWeek": null,
            "occupation": null,
            "salaryTypeCode1": null,
            "salaryAmount1": null,
            "otherParticipants": [],
            "clientDefinedField1": "X",
            "clientDefinedField2": null,
            "clientDefinedField3": null,
            "clientDefinedField4": null,
            "clientDefinedField5": null
        }
    ],
    "pageSize": 25,
    "start": 1
     }
   }
  ]
}`,
    error1: ``
  },
  "terminate": {
    success: `{
        "logType": "INFO",
        "result": "Passed",
        "duration": "2526ms",
        "item": "Request_Item_1",
        "ainfo2": "Status: 200",
        "classLine": "",
        "sinfo": "POST",
        "ainfo": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/terminate?subscriberIdentifier=19780079",
        "step": "Step_5",
        "dataset": "Dataset_1",
        "testcase": "member_termination",
        "timestamp": "2026-04-27T10:48:17.315Z",
        "execution_details": [
            {
                "requestId": "-41d602fe",
                "requestUrl": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/terminate?subscriberIdentifier=19780079",
                "requestBody": {
                    "reasonCode": "AU",
                    "effectiveDate": "2026-05-01",
                    "dependentNumbers": [
                        "00"
                    ]
                },
                "requestQueryParams": {
                    "subscriberIdentifier": "19780079"
                },
                "responseHeaders": {
                    "access-control-allow-credentials": "true",
                    "access-control-allow-origin": "https://adminportal.greenshield.ca",
                    "alt-svc": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000",
                    "content-type": "application/json; charset=utf-8",
                    "date": "Mon, 27 Apr 2026 10:48:14 GMT",
                    "server-timing": "dtTrId;desc=\"afacbf96fb4e0edafff62b7896d954ec\", dtSInfo;desc=\"0\", dtRpid;desc=\"1769483885\"",
                    "set-cookie": "dtCookie=v_4_srv_3_sn_43A5D331F948A71787234322824AD688_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_1_rcs-3Acss_0; Path=/; Domain=.greenshield.ca",
                    "strict-transport-security": "max-age=2592000",
                    "timing-allow-origin": "*",
                    "transfer-encoding": "chunked",
                    "via": "1.1 google, 1.1 google",
                    "x-correlation-id": "c966cbc6-30c7-4c0a-8f0e-b6db1d9969d0",
                    "x-request-id": "b2348002-d1d1-4e74-8ff8-e2fd0971089e",
                    "x-response-time-ms": "2106",
                    "x-routed-backend": "canary"
                },
                "responseBody": true
            }
        ]
    }`,
    error1: `{
        "logType": "ERROR",
        "result": "Failed",
        "duration": "1672ms",
        "item": "Request_Item_1",
        "ainfo2": "Status: 400",
        "classLine": "",
        "sinfo": "POST",
        "ainfo": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/terminate?subscriberIdentifier=19780079",
        "step": "Step_5",
        "dataset": "Dataset_1",
        "testcase": "member_termination",
        "timestamp": "2026-04-27T11:00:03.860Z",
        "execution_details": [
            {
                "requestId": "-41d602fe",
                "requestUrl": "https://api.onlineweb.ca/digital-products-api-b2c/api/v1/PlanMember/terminate?subscriberIdentifier=19780079",
                "requestBody": {
                    "reasonCode": "NA",
                    "effectiveDate": "2026-05-01",
                    "dependentNumbers": [
                        "00"
                    ]
                },
                "requestQueryParams": {
                    "subscriberIdentifier": "19780079"
                },
                "responseBody": [
                    {
                        "errorCode": "Valid reasoncode is not provided",
                        "errorDescription": "Valid reasoncode is not provided",
                        "localizedErrorDescription": null,
                        "errorSeverity": "Error",
                        "errorFields": [],
                        "metaData": null
                    }
                ]
            }
        ]
    }`
  }
};
function getResponseKeys(keys) {
  return keys.filter(function (key) {
    return /^(5\.(8|9|10)|6\.(11|12)|7\.(3|4)|8\.(4|5))(\..+)?$/.test(key);
  });
}