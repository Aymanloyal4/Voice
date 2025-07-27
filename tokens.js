// status can be "online", "idle", "dnd", or "invisible" or "offline"

export default [

    {

        channelId: "1290406503630635089",

        serverId: "927723375349100584",

        token: process.env.token1,

        selfDeaf: false,

        autoReconnect: {

            enabled: true,

            delay: 5, // ثواني

            maxRetries: 5,

        },

        presence: {

            status: "idle",

        },

        selfMute: true,

    },

];
