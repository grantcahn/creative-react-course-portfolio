import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { MovieState } from '../movieState';

// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetail = () => {
  const url = useLocation();
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  //   const [moviestate, setMovieState] = useState(MovieState);

  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === url.pathname
    );
    if (currentMovie[0]) setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      {movie && (
        <Details>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </Details>
      )}
    </motion.div>
  );
};

const Details = styled.div`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20rem;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 4rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.5rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    margin: 1rem 0rem;
    height: 0.5rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
