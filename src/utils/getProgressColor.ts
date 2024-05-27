export const getProgressColor = (progress: number) => {
  if (progress < 30) {
    return 'success';
  }

  if (progress < 60) {
    return 'warning';
  }

  return 'error';
};
