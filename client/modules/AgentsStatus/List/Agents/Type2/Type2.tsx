import React from 'react';

type Props = {
  id: string;
  name: string;
  toggle: (string) => void;
  isOnline: boolean;
  type: string;
};

const Type2 = (props: Props) => {
  const { id, name, toggle, isOnline, type } = props;
  const onlineClass = !isOnline ? 'agent-type2--disabled' : '';

  return (
    <li className={`tst-agent-status-${id} agent-type2 ${onlineClass}`}>
      <a className="agent-type2__link" href={`/agent/${id}`}>
        {name} [{type}]
      </a>
      <button
        type="button"
        className="agent-type2__toggle"
        /* @ts-ignore - to be fixed */
        onClick={toggle(id)}
      >
        Toggle
      </button>
    </li>
  );
};

export default Type2;
