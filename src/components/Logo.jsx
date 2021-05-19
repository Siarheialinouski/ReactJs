import './Styles.css';

export const Logo = () => {
  const element = <img src={"https://api.freelogodesign.org/assets/thumb/logo/23243803_400.png?t=637478931530000000"} width="100" height="100" alt="logo"/>;
  return (
    <div class="Div-inline">
         {element}
    </div>
  );
}