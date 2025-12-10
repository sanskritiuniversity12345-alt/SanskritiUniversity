import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Menu = styled.div`
  position: fixed;
  background: white;
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 200px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  z-index: 3000;
`;

export default function PortalDropdown({ anchorRef, isOpen, onClose, children, offset = 6, onMenuEnter, onMenuLeave }) {
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    function updatePosition() {
      if (!anchorRef?.current) return;
      const rect = anchorRef.current.getBoundingClientRect();
      const top = rect.bottom + offset;
      const left = rect.left;
      setPos({ top, left });
    }

    function handleClick(e) {
      if (!isOpen) return;
      const menu = document.getElementById('portal-dropdown-menu');
      if (!menu) return;
      if (menu.contains(e.target) || anchorRef?.current?.contains(e.target)) return;
      onClose && onClose();
    }

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [anchorRef, isOpen, onClose, offset]);

  if (!isOpen) return null;

  return createPortal(
    <Menu id="portal-dropdown-menu" style={{ top: pos.top + 'px', left: pos.left + 'px' }} onMouseEnter={onMenuEnter} onMouseLeave={onMenuLeave} onTouchStart={onMenuEnter}>
      {children}
    </Menu>,
    document.body
  );
}
