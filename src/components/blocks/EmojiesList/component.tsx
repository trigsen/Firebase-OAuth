import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { reoderItems } from '@/utils/helpers/reorderItems';
import { StyledUl } from './styles'
import { emojiList } from '@/constants/emoji';

const EmojiesList = () => {
  const [list, setList] = useState(emojiList);

  const onDragEnd = (result : DropResult) => {
    if (!result.destination) {
      return ;
    }

    const items = reoderItems(
      list,
      result.source.index,
      result.destination.index
    );

    setList(items);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppableId" direction="horizontal">
        {(provided) => (
          <StyledUl
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {list.map((item, index) => (
              <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </li>
                )}
              </Draggable>
              )
            )}
              {provided.placeholder}
          </StyledUl>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default EmojiesList;