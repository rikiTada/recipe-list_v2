import { useEffect } from "react";
import { useReward } from "react-rewards";

export const Foo = () => {
  const { reward, isAnimating } = useReward("rewardId", "confetti");

  useEffect(() => {
    reward();
  }, [reward]);

  return (
    <div>
      <span id="rewardId" />
    </div>
  );
};
