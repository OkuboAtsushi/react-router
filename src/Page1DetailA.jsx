import { useLocation, useHistory } from "react-router";

export const Page1DetailA = () => {
  const { state } = useLocation();

  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailA頁です</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
