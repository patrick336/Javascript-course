import {connect} from 'react-redux';
import Comment from './Comment';
import { thumbUpComment } from './index.js';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);

//Łączenie akcji z Reactem jest bardzo podobne do podpinania store, ale tym razem, w funkcji connect uzupełniamy drugi argument - mapDispatchToProps. Jak sama nazwa wskazuje, jest to funkcja, która mapuje odpowiednie wywołanie akcji do propsów. Zauważ, że metoda zwraca obiekt z funkcjami już gotowymi do użycia w komponentach!