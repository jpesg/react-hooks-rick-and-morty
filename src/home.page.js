import React from "react";
import { Store } from "./store";
import { fetchDataAction, toggleFavAction } from "./actions";
const EpisodesList = React.lazy(() => import("./episodes.list"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  const props = {
    episodes: state.episodes,
    state: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  };

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  }, [state]);

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
