const dateLastWon = dayjs("2011-11-26");
const dateLastWonInColumbus = dayjs("2000-11-18");
const dateNextGame = dayjs("2024-11-30");

window.addEventListener("DOMContentLoaded", () => {
  updateDom("#days-since-won", fromDaysAgo(dateLastWon));
  updateDom("#days-since-won-columbus", fromDaysAgo(dateLastWonInColumbus));
  updateDom("#days-until-game", untilDays(dateNextGame));
});

const fromDaysAgo = (date) => {
  if (!date) return "0 days";
  const now = dayjs();
  const diffDays = now.diff(dayjs(date), "day");
  return `${diffDays} days`;
};

const untilDays = (date) => {
  if (!date) return "0 days";
  const now = dayjs();
  const diffDays = dayjs(date).diff(now, "day");
  return `${diffDays} days`;
};

const updateDom = (id, value) => {
  const daysSinceWonEl = document.querySelector(id);
  daysSinceWonEl.outerHTML = value;
};
