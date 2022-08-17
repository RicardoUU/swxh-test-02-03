import { CaretRightSmallIcon, CaretDownSmallIcon } from 'tdesign-icons-vue-next';
import { defineComponent, h, onBeforeMount, onMounted, computed, ref, reactive } from 'vue';

{
  /* <CaretDownSmallIcon /> */
}
export default defineComponent({
  name: 'RTree',
  props: {
    data: { type: Array },
    index: { type: Number }
  },
  setup(props) {
    let index = props.index ? props.index : 0;
    index += 1;

    const closeList = reactive([]);

    function onoff(id: number): any {
      if (closeList.includes(id)) {
        closeList.splice(closeList.indexOf(id));
      } else {
        closeList.push(id);
      }
    }
    console.log(props.data);
    return () => (
      <div style={{ width: '200px' }}>
        {props.data &&
          props.data.map((item: any) => (
            <div style={{ marginLeft: '10px' }}>
              {
                <p style={{ marginLeft: `${index * 10}px` }}>
                  {item.children && (
                    <span onClick={() => onoff(item.id)} style={{ marginLeft: '-30px' }}>
                      {closeList.includes(item.id) ? (
                        <CaretRightSmallIcon size="2em"></CaretRightSmallIcon>
                      ) : (
                        <CaretDownSmallIcon size="2em"></CaretDownSmallIcon>
                      )}
                    </span>
                  )}
                  <span>{item.text}</span>
                </p>
              }
              {item.children && !closeList.includes(item.id) && (
                <r-tree
                  data={item.children}
                  index={index}
                  style={{ marginLeft: `${index * 15}px` }}
                ></r-tree>
              )}
            </div>
          ))}
      </div>
    );
  }
});
