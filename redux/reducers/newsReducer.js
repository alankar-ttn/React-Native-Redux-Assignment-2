import channles from '../../dummy/news.json';

const initialDetailData = {
  title: channles.data.results[0].meta.title,
  desc: channles.data.results[0].meta.description,
  video: channles.data.results[0].detail.playUrl,
};

const newsReducer = (state = channles.data.results, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const detailReducer = (state = initialDetailData, action) => {
  switch (action.type) {
    case 'SHOW_NEWS_DETAIL': {
      const item = channles.data.results.filter(
        i => i.meta.id === action.payload.id,
      )[0];
      return {
        title: item.meta.title,
        desc: item.meta.description,
        video: item.detail.playUrl,
      };
    }
    default:
      return state;
  }
};

export default newsReducer;
