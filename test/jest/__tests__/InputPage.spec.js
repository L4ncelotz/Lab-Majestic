import { shallowMount } from '@vue/test-utils';
import InputPage from 'src/pages/InputPage.vue';

describe('InputPage.vue', () => {
  it('should trigger submit-form event when form is submitted', async () => {
    const wrapper = shallowMount(InputPage);

    // หาปุ่มที่ต้องการคลิก
    const form = wrapper.find('form');

    // Mock ฟังก์ชันสำหรับจับอีเวนต์
    await form.trigger('submit.prevent');  // จำลองการส่งฟอร์ม

    // ตรวจสอบว่าอีเวนต์ 'submit-form' ถูกส่งด้วยค่า firstName และ secondName ที่ถูกต้อง
    expect(wrapper.emitted()).toHaveProperty('submit-form');
    expect(wrapper.emitted('submit-form')[0]).toEqual([{ firstName: '', secondName: '' }]);
  });
});
