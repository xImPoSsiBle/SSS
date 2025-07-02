
module.exports = {
  theme: {
    extend: {
      animation: {
        gradient: "gradientShift 4s ease infinite",
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
       backgroundImage: {
        'diamond-gradient': 'radial-gradient(closest-side, #ffffff, #D9D9D9, #999999)',
      },
    },
  },
};
