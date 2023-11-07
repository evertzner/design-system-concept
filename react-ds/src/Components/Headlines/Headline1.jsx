/**
 * @param {('div'|'span'|'label')} selectedElement
 */
const Headline1 = ({ children, selectedElement }) => {
  const ElementToRender = selectedElement;
  return <ElementToRender className='font-bold text-lg text-blue-800'>{children}</ElementToRender>;
};

export default Headline1;
