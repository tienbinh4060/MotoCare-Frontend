import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'upcoming' | 'expired';
}

@Component({
  selector: 'app-agency-promotions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agency-promotions.html',
  styleUrls: ['./agency-promotions.css'],
})
export class AgencyPromotionsComponent {
  promotions: Promotion[] = [
    {
      id: 'P001',
      title: 'Giảm giá thay dầu',
      description: 'Giảm 20% cho dịch vụ thay dầu',
      discount: '20%',
      startDate: '01/01/2024',
      endDate: '31/01/2024',
      status: 'active',
    },
    {
      id: 'P002',
      title: 'Bảo dưỡng cuối năm',
      description: 'Giảm 15% cho bảo dưỡng tổng thể',
      discount: '15%',
      startDate: '01/12/2023',
      endDate: '31/12/2023',
      status: 'expired',
    },
    {
      id: 'P003',
      title: 'Khuyến mãi pin xe điện',
      description: 'Giảm 10% khi thay pin xe điện',
      discount: '10%',
      startDate: '01/02/2024',
      endDate: '28/02/2024',
      status: 'upcoming',
    },
  ];

  /** Text trạng thái */
  getStatusText(status: Promotion['status']) {
    switch (status) {
      case 'active':
        return 'Đang áp dụng';
      case 'upcoming':
        return 'Sắp diễn ra';
      case 'expired':
        return 'Đã kết thúc';
    }
  }

  /** + Thêm khuyến mãi */
  addPromotion() {
    alert('Chức năng đang được phát triển');
  }

  /** 👁 Xem chi tiết */
  viewPromotion(p: Promotion) {
    alert(
      `Tên khuyến mãi: ${p.title}\n\n` +
      `Mô tả: ${p.description}\n\n` +
      `Giảm giá: ${p.discount}\n\n` +
      `Thời gian: ${p.startDate} → ${p.endDate}\n\n` +
      `Trạng thái: ${this.getStatusText(p.status)}`
    );
  }

  /** ❌ Xoá (mock) */
  deletePromotion(p: Promotion) {
    const ok = confirm('Bạn có chắc muốn xoá khuyến mãi này không?');

    if (ok) {
      alert('Xoá khuyến mãi thành công');
    }
  }
}
