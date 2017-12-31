// //Funkcja connect sluzy do laczenia komponentów do store
// Zaczynamy od zaimportowania tajemniczej funkcji connect, która służy do łączenia komponentów do store. Nie modyfikuje przy tym w żaden sposób istniejącego komponentu, a zwraca nowy, rozszerzony o nowe funkcjonalności. Funkcja ta przyjmuje na wejściu cztery parametry, ale nas interesuje póki co tylko pierwszy z nich.
//
// Argument mapStateToProps zajmuje się (jak sama nazwa wskazuje) mapowaniem odpowiedniej porcji stanu do propsów, które przekażemy komponentowi. mapStateToProps musi być funkcją, która na wejściu przyjmuje stan aplikacji, a na wyjściu zwraca obiekt podpinający konkretne wartości propsów do komponentu CommentsList.
//
// Zauważ, że wywołujemy funkcję connect, która zwraca funkcję. Następnie, wywołanie tej funkcji dopiero podpina się pod komponent CommentsList. Na początku może się to wydawać nieco dziwne, ale pierwsze wywołanie funkcji przygotowuje odpowiednią, inną funkcję która będzie służyła do wstrzyknięcia przygotowanych danych do komponentu.

import {connect} from 'react-redux';
import CommentsList from './CommentsList';

const mapStateToProps = state => ({
    comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);
