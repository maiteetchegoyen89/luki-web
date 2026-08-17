export default function IosStatusBar() {
  return (
    <div className="ios-status">
      <span>9:41</span>
      <span className="icons">
        <span className="sig"><i /><i /><i /><i /></span>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none"><path d="M7.5 10.2c-.4 0-.7-.2-1-.4L1 5.2c2-2 4-3 6.5-3s4.5 1 6.5 3l-5.5 4.6c-.3.2-.6.4-1 .4Z" fill="#111" /></svg>
        <span className="batt"><i /></span>
      </span>
    </div>
  )
}
