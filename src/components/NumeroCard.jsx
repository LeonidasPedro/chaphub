import useCountUp from '../hooks/useCountUp.js';

export default function NumeroCard({ count, prefix, suffix, label, sub, icon, delay }) {
  const [ref, value] = useCountUp(count);
  return (
    <div className="numero-card fade-in" ref={ref} data-count={count} style={delay ? { transitionDelay: delay } : undefined}>
      <div className="numero-card__icon">{icon}</div>
      <div className="numero-card__value">
        {prefix && <span className="count-prefix">{prefix}</span>}
        <span className="count-up">{value}</span>
        {suffix && <span className="count-suffix">{suffix}</span>}
      </div>
      <div className="numero-card__label">{label}</div>
      <div className="numero-card__sub">{sub}</div>
    </div>
  );
}
