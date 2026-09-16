function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-screen-content">
        <span className="loading-screen-brand">LUXE ERA</span>

        <span className="loading-screen-line" aria-hidden="true" />

        <span className="loading-screen-label">
          Construction & Interior Solutions
        </span>
      </div>
    </div>
  );
}

export default LoadingScreen;