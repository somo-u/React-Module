import React from 'react';
import Header from '../components/Header';
import Filter from "../components/Filter";
import MovieGrid from "../components/MovieGrid";
import Footer from '../components/Footer';

import { suggested, mostViwed, recentRelease } from "../utils/helper";

class Shows extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Filter />
        <MovieGrid
          gridType="is-suggested"
          title="إقتراحتنا لك"
          movies={suggested(this.props.movies)}
          limit={4} />

        <MovieGrid
          gridType="is-suggested"
          title="الأكثر مشاهدة"
          movies={mostViwed(this.props.movies)}
          limit={4} />

        <MovieGrid
          gridType="is-movies"
          title="أحدث المسلسلات"
          movies={recentRelease(this.props.movies, 'Show')}
          limit={32} />
        <Footer />
      </>
    );
  }
}

export default Shows;