import React from "react";
import { Store } from "./store";
import { toggleFavAction } from "./actions";
const EpisodesList = React.lazy(() => import("./episodes.list"));
export default function FavPage() {
  const { state, dispatch } = React.useContext(Store);
  const props = {
    episodes: state.favourites,
    state: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  };
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  );
}
