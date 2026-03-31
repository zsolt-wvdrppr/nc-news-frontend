export const useLimitVote = () => {
  type StoreVoteType = {
    vote: -1 | 0 | 1;
    articleId: number;
  };
  const storeVote = (details: StoreVoteType) => {
    const stored = sessionStorage.getItem("votes");
    if (stored) {
      const parsed = JSON.parse(stored);
      parsed[details.articleId] = details.vote;
      sessionStorage.setItem("votes", JSON.stringify(parsed));
    } else {
      sessionStorage.setItem(
        "votes",
        JSON.stringify({ [details.articleId]: details.vote }),
      );
    }
  };

  const hasVote = (articleId: number) => {
    const stored = sessionStorage.getItem("votes");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed[articleId]) {
        return parsed[articleId];
      }
      return 0;
    } else {
      return 0;
    }
  };

  return { storeVote, hasVote };
};
