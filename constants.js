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
const PROVINCE_LINK = "#Country#Province%20Codes";

const COVERAGE_KEYS = ["5.5.9", "6.6.10"];
const COVERAGE_LINK = "#Country#Province%20Codes";

const GENDER_KEYS = ["5.6.6", "6.7.6","6.9.12","6.10.11"];
const GENDER_LINK = "#Gender%20Codes";

const DIVISION_KEYS = ["5.7.5", "5.7.9","6.8.5","6.8.9"];
const DIVISION_LINK = "#Billing%20Division%20and%20Class%20Codes";

const EMPLOYMENT_KEYS = ["5.7.11", "6.8.11"];
const EMPLOYMENT_LINK = "#Employment%20Status";

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
  "add-single": `{ {
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
          "homePhone": "(234) 567-8901",
          "officePhone": "",
          "confirmEmail": "",
          "homeAreaCode": "",
          "officeAreaCode": ""
        },
        "coverage": {
          "ppmpOption": "",
          "dentalOption": "",
          "familyStatus": "S",
          "healthOption": "",
          "effectiveDate": "04/01/2026",
          "familyCategory": "",
          "overrideReason": "",
          "applicationDate": "",
          "enrolmentOption": "",
          "overrideCoverage": "",
          "lateEntranceIndicator": false,
          "lateEntranceStartDate": null,
          "nihbElectionIndicator": false,
          "ramqElectionIndicator": false,
          "extendedHealthCoverage": "S",
          "psaContributionDeposit": null,
          "hcsaContributionDeposit": null,
          "overrideBenefitStartDate": ""
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
          "smokerIndicator": null,
          "preferredFirstName": null
        },
        "employment": {
          "salary": "1",
          "salary1": "1",
          "salary2": null,
          "currency": "",
          "division": "",
          "hireDate": "01/01/2026",
          "jobTitle": "It",
          "classCode": "2",
          "sectionId": "",
          "sinNumber": null,
          "incomeRows": "",
          "occupation": "It",
          "alternateId": null,
          "salaryType1": "AN",
          "salaryType2": null,
          "familyStatus": "",
          "hoursPerWeek": 40,
          "salaryAmount1": "1",
          "salaryAmount2": null,
          "employmentType": "",
          "workPercentage": null,
          "salaryTypeCode1": "AN",
          "salaryTypeCode2": null,
          "workHoursPerWeek": 40,
          "clientDefinedField1": "BRONZE",
          "occupationClassCode": null,
          "billingDivisionNumber": "40000",
          "employmentProvinceCode": "ON",
          "employmentStatusTypeCode": "A"
        }
      }
    ]
  },
  "API-Key": "abc123",
  "function": "add-single",
  "password": "PaXXXXXX",
  "username": "enr@groupbenefitz.ca",
  "terminate": {
    "body": [
      {}
    ],
    "query_params": [
      {}
    ]
  },
  "dependents": [
    {
      "spouse": [],
      "children": []
    }
  ],
  "enrollment": {
    "form": {
      "body": [
          "endDate": "",
          "coverage": {
            "ppmpOption": "",
            "dentalOption": "",
            "familyStatus": "",
            "healthOption": "",
            "effectiveDate": "",
            "familyCategory": "",
            "applicationDate": "",
            "enrolmentOption": "",
            "overrideCoverage": "",
            "lateEntranceIndicator": null,
            "lateEntranceStartDate": null,
            "nihbElectionIndicator": null,
            "ramqElectionIndicator": null,
            "extendedHealthCoverage": "",
            "psaContributionDeposit": null,
            "hcsaContributionDeposit": null,
            "overrideBenefitStartDate": "",
            "overrideBenefitStartReason": ""
          },
          "startDate": "",
          "employment": {
            "salary": "",
            "currency": "",
            "division": "",
            "hireDate": "",
            "jobTitle": "",
            "classCode": "",
            "sectionId": "",
            "sinNumber": null,
            "incomeRows": "",
            "alternateId": null,
            "familyStatus": "",
            "employmentType": "",
            "workPercentage": null,
            "workHoursPerWeek": "",
            "clientDefinedField1": "",
            "billingDivisionNumber": null,
            "employmentProvinceCode": "",
            "employmentStatusTypeCode": ""
          },
          "categoryCode": "",
          "employeeDetails": {
            "city": "",
            "email": "",
            "gender": "",
            "address1": "",
            "address2": "",
            "address3": "",
            "lastName": "",
            "birthDate": "",
            "firstName": "",
            "middleName": "",
            "postalCode": "",
            "countryCode": "",
            "provinceCode": "",
            "correspondenceLanguage": ""
          },
          "employmentStatus": null
        }
      ]
    },
  "execution_id": 20047
}
 
  }`,
  "add-family": `{  }`,
  "search-member": ` "search": {
      "body": [
        {
          "status": "null",
          "lastName": "",
          "birthDate": "",
          "classCode": "",
          "firstName": "",
          "sectionId": "",
          "sortField": "",
          "sortOrder": "",
          "certificate": "",
          "currentPage": "",
          "divisionCode": "",
          "statusReason": "",
          "employeeNumber": ""
        }
      ]
    }
  },`,
  "terminate": `{
    "API-Key": "abc123",
    "username": "en@groupbenefitz.ca",
    "password": "PXXXXXXXX",
    "function": "terminate-member",
 
    "member": {
 
        "body": []
 
    },
 
    "enrollment": {
 
        "search": {
 
            "body": []
        },
 
        "form": {
            "body": []
        }
    },
 
    "dependents": [],
 
    "benefits": [],
 
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
                "reason": "NA",
                "dependentNumbers": ["00"]
            }
        ]
    }
}`
};
const SUCCESS_RESPONSE = `{
  "responseBody": {
    "subscriberId": 19XXXXXX,
    "validationWarnings": []
  }
}`;
const ERROR1_RESPONSE = `"execution_details": [
        {
          "requestId": "56f6b623",
          "requestUrl": "https://api.onlineweb.ca/pmos-api-b2c/api/v1/PlanMembers/IdCard?subscriberIdentifier=",
          "requestBody": "",
          "responseBody": [
            {
              "metaData": null,
              "errorCode": "plan_member_not_found",
              "errorFields": [],
              "errorSeverity": "Error",
              "errorDescription": "No Plan Member was found with the identifier ",
              "localizedErrorDescription": null
            }

          ],`;