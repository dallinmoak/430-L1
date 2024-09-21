import ghpage from "gh-pages";

ghpage.publish("dist", (e) => {
  if (e) {
    console.error(e);
  } else {
    console.log("Published");
  }
});
