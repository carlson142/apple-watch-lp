interface DataProps {
  id: number;
  title: string;
  text: string;
  btn: boolean;
}

export const cardData: DataProps[] = [
  {
    id: 1,
    title: "KNOW YOUR RUNS. IN AND OUT.",
    text: "Train smarter with more in-run stats. Want to compare a run to your alst five? Just swipe left. Mark splits by selecting pause or using gestures, like tapping the screen or double-clicking the side button. And get a full post-run report, including elevation.",
    btn: false,
  },
  {
    id: 2,
    title: "RUN IN GOOD SPIRITS.",
    text: "A little support can go a long way. You can receive encouraging emoji from friends. And reminders triggered by your friends’ shared activity, the current weather, or your own history give you every reason to run.",
    btn: false,
  },
  {
    id: 3,
    title: "JUST DO IT. SUNDAY.",
    text: "Run every Sunday and see how long you can keep your streak alive. Fuel your run with exclusive Nike+ Run Club playlists on Apple Music.",
    btn: true,
  },
];
