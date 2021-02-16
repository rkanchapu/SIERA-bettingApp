import React from "react";
import { Card, Button } from "react-bootstrap";
import {
  EventItem,
  MarketItem,
  SelectionItem,
} from "../../TypescriptTypes/Events";

/* props of the component */
export interface Props {
  events: Array<EventItem>;
  ADD_TO_BET_SLIP: (body: SelectionItem) => void;
  bets: Array<SelectionItem>;
  REMOVE_FROM_BET_SLIP: (id: String) => void;
}

const Events: React.FC<Props> = ({
  events,
  ADD_TO_BET_SLIP,
  bets,
  REMOVE_FROM_BET_SLIP,
}) => {

  /* function to place a bet */
  function placeBet(selection: SelectionItem, selectionIDs: Array<string>) {
    const idsToRemoveBet = selectionIDs.filter((id) => id !== selection.id);
    ADD_TO_BET_SLIP(selection);
    idsToRemoveBet.forEach((id) => {
      REMOVE_FROM_BET_SLIP(id);
    });
  }
  /* function to remove a bet */
  function removeBet(selectionId: String) {
    REMOVE_FROM_BET_SLIP(selectionId);
  }

  /* function which displays selection buttons */
  function selectionButtons(selections: Array<SelectionItem>) {
    const selectionIDs = selections.map((selection) => selection.id);
    const selectedIDs = bets.map((bet) => bet.id);
    return selections.map((selection, index) => {
      const elementKey = `${index + 1}_${selection.id}`;
      if (selectedIDs.includes(selection.id)) {
        return (
          <Button key={elementKey} variant="success" onClick={() => removeBet(selection.id)}>
            {selection.name}
            <br />
            {selection.price}
          </Button>
        );
      } else {
        return (
          <Button key={elementKey} onClick={() => placeBet(selection, selectionIDs)}>
            {selection.name}
            <br />
            {selection.price}
          </Button>
        );
      }
    });
  }

  /* function to display markets */
  function displayMarkets(markets: Array<MarketItem>) {
    return markets.map((market, index) => {
      const elementKey = `${index + 1}_${market.id}`;
      if (market.selections.length) {
        return (
          <div key={elementKey}>
            <Card.Title key={elementKey} className="text-left">
              {market.name}
            </Card.Title>
            <div className="d-flex justify-content-between">
              {selectionButtons(market.selections)}
            </div>
            {markets.length > index + 1 && (
              <>
                <br />
                <hr />
              </>
            )}
          </div>
        );
      }
      return null;
    });
  }

  /* function to display events */
  const displayEvents = () => {
    return events.map((event, index) => {
      const elementKey = index + 1;
      if (event.markets.length) {
        return (
          <div className="mb-2" key={elementKey}>
            <Card key={elementKey}>
              <Card.Header as="h5">{event.name}</Card.Header>
              <Card.Body>{displayMarkets(event.markets)}</Card.Body>
            </Card>
          </div>
        );
      }
      return null;
    });
  };

  return <>{displayEvents()}</>;
};

export default Events;
