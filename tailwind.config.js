export default {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {

            colors: {
                primary: "#6366f1",
                accent: "#22d3ee",
                dark: "#020617"
            },

            backgroundImage: {
                "hero-gradient":
                    "linear-gradient(to right, #020617, #0f172a)"
            }

        },
    },
    plugins: [],
}