const check = [
    {
        type: "text",
        name: "subdomain",
        message: "What subdomain would you like to check?"
    }
]

const register = [
    {
        type: "text",
        name: "subdomain",
        message: "What subdomain would you like?"
    },

    {
        type: "select",
        name: "record",
        message: "What type of record do you want to use?",
        choices: [
            { value: "A" },
            { value: "AAAA" },
            { value: "CNAME" },
            { value: "TXT" }
        ]
    },

    {
        type: "text",
        name: "record_value",
        message: "What should the value of the record be?"
    },

    {
        type: "select",
        name: "proxy_state",
        message: "Should the record be proxied through Cloudflare?",
        choices: [
            { title: "No", value: "false" },
            { title: "Yes", value: "true" }
        ]
    }
]

const remove = [
    {
        type: "text",
        name: "subdomain",
        message: "What is your subdomain?"
    },

    {
        type: "confirm",
        name: "confirmation",
        message: "Are you sure you want to delete your subdomain?"
    }
]



const update = [
    {
        type: "text",
        name: "subdomain",
        message: "What is your subdomain?"
    },

    {
        type: "select",
        name: "record",
        message: "What type of record do you want to use?",
        choices: [
            { value: "A" },
            { value: "AAAA" },
            { value: "CNAME" },
            { value: "TXT" }
        ]
    },

    {
        type: "text",
        name: "record_value",
        message: "What should the value of the record be?"
    },

    {
        type: "select",
        name: "proxy_state",
        message: "Should the record be proxied through Cloudflare?",
        choices: [
            { title: "No", value: "false" },
            { title: "Yes", value: "true" }
        ]
    }
]

module.exports = {
    check,
    register,
    remove,
    update
}
