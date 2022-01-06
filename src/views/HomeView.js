import Container from "components/Container/Container";
import data from "data/facts.json";
import s from "./HomeView.module.scss";

function HomeView() {
  // console.log(data);
  const generatedNumber = () => {
    return Math.floor(Math.random() * (10 - 0) + 0);
  };
  const getNumber = generatedNumber();

  return (
    <Container additionalClass={s.HomeView__container}>
      <h1>Did You Know?</h1>
      <div className={s.HomeView__random}>
        <h2 className={s.HomeView_heading}>{data[getNumber].heading}</h2>
        <p className={s.HomeView__text}>{data[getNumber].text}</p>
      </div>
    </Container>
  );
}

export default HomeView;
