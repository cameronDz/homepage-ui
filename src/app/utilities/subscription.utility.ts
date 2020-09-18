import { Subscription } from 'rxjs';

/**
 * utility class to use with subscriptions
 */
export class SubscriptionUtility {

  /**
   * unsubscribe safely from a subscription
   * @param subscription subscription being destroyed
   */
  public static unsubscribe(subscription: Subscription): void {
    if (!!subscription) {
      subscription.unsubscribe();
      subscription = null;
    }
  }
}
