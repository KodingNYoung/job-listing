import localFont from "next/font/local"

export const DMSans = localFont({
  src: [
    {
      path: "./DMSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "./DMSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./DMSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "./DMSans-Regular.ttf",
      weight: "400",
    },
  ],
  display: "swap",
  variable: "--app-font",
})
