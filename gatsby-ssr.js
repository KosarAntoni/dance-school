import React from 'react';

export function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([<div key="modal-root" id="modal-root" />]);
}
